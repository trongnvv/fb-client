import React, { useEffect, useState } from 'react'
import { Button, Table, Row, Col } from 'antd';
import api from '../common/api';
const Facebook = () => {
  const [initFB, setInitFB] = useState(false);
  const [token, setToken] = useState('');
  const [userID, setUserID] = useState('');
  const [name, setName] = useState('');
  const dataSource = [];
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '453362388969117',
        cookie: true,
        xfbml: true,
        version: 'v8.0'
      });
      setInitFB(true);
    };
  }, [])

  useEffect(() => {
    if (initFB) {
      getLoginStatus();
    }
  }, [initFB]);

  const getLoginStatus = () => {
    window.FB.getLoginStatus(function (response) {   // See the onlogin handler
      console.log('getLoginStatus', response);
      if (response && response.authResponse && response.authResponse.accessToken) {
        initData(response);
      }
    });
  }

  const login = () => {
    window.FB.login(function (response) {
      console.log('login', response);
      if (response && response.authResponse && response.authResponse.accessToken) {
        initData(response);
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

  const initData = (response) => {
    setToken(response.authResponse.accessToken);
    setUserID(response.authResponse.userID);
    profile();
    saveToken(response.authResponse);
  }

  const saveToken = async (authResponse) => {
    try {
      const res = await api({
        url: '/fb/save-token',
        method: 'post',
        data: authResponse
      });
      console.log('saveToken-res', res);
    } catch (error) {
      console.log('error: ', error);
    }
  }

  const profile = () => {
    window.FB.api('/me', function (response) {
      console.log('Good to see you, ', response);
      setName(response.name)
    });
  }

  return (
    <Row style={{ paddingTop: 100 }}>
      <Col span={12} offset={6}>
        <Button type="primary" onClick={() => getLoginStatus()}> fb check </Button>
        <Button type="primary" onClick={() => login()}> fb login </Button>
        <div>userID: {userID}</div>
        <div>name: {name}</div>
        <Table dataSource={dataSource} columns={columns} />
      </Col>
    </ Row>
  )
}

export default Facebook;

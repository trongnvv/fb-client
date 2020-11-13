const api = require('./utils/api');
const { HOST_FB } = require('./config');

const userAccessToken = "EAAGcVKgmJp0BAJbdtkAkvm0629RHx9DyP9wU6bTff0m0uDx2fpdpAoBV3gfqRrvdZBmHaXx6o04hhx1EDXNpfbDE78x4bgpiJtYdQntyN2LCbzXrPMZCcKA56Gvmql8Bqm7QwanmbtxfuaLfvYakdY945ZB8vkj4hERhex6VwQKdSWS4vZCwD10ox3iGh4GsLPEKcd9KFGgkhz5bHab2";
const pageToken = "EAAGcVKgmJp0BAJuj8xHjGF7exsAGj8T3AB6MZAnrAW5dDjuZAX849uJkwogHkvjnGaZAb3ZC5gUVIv7ZCcFgH0ZA6l67U32mTbcNANgXQfN5Ma8dLgLH9kHlFNo74RlU4SQvB6vZChSsvUu1eD1XBKjUnEXTvUJN73IPXQ8pIcV0ooU16QHQh9eKNq40ysBWHQWuWI6ZBw36HJfYa9KifrUK";
const pageId = "108025307693336";
const callApi = async (url) => {
  try {
    const res = await api({
      baseURL: HOST_FB,
      method: 'get',
      params: { access_token: userAccessToken },
      url,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

const callApiDel = async (url) => {
  try {
    const res = await api({
      baseURL: HOST_FB,
      method: 'delete',
      params: { access_token: userAccessToken },
      url,
    });
    console.log(res.data.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

const callApiPOST = async (url) => {
  try {
    const res = await api({
      baseURL: HOST_FB,
      method: 'POST',
      params: {
        access_token: userAccessToken,
        message: 'message' + new Date().getTime()
      },
      url,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

const permissions = () => {
  callApi('/v8.0/me/permissions')
}

const accounts = () => {
  callApi('/me/accounts')
}

const getU = () => {
  callApi('/v9.0/180612616834029/feed')
}

const groups = () => {
  callApi('/me/groups')
}

const profile = () => {
  callApi('/v8.0/me')
}

const getGRPost = () => {
  callApi('/me/feed')
}

const postGR = () => {
  callApiPOST('/me/feed')
}

const getComments = () => {
  callApi('/727044884909024_727154354898077/comments')
}

const comments = () => {
  callApiPOST('/108025307693336_159947765834423/likes')
}
// getPage();
// postGR();
// comments(); 
// deleteComments();
// permissions();
// getComments();
// accounts();
postGR();
// groups();
// getU();

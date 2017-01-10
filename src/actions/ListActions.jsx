import request from 'superagent';

export const ActionTypes = {
  Add: 'LIST_ADD',
  Fetch: 'LIST_FETCH',
  Populate: 'LIST_POPULATE'
};

export const add = (item) => ({
  type: ActionTypes.Add,
  item: item.text
});

export const fetch = () => {
  return (dispatch) => {
    return request.get('http://localhost:3000/items').end((err, response) => {
      console.log(err);
      console.log(response);
    });
  }
};


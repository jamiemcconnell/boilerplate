import request from 'superagent';

export const ActionTypes = {
  Add: 'LIST_ADD',
  Fetch: 'LIST_FETCH',
  Populate: 'LIST_POPULATE',
  Fetching: 'LIST_FETCHING',
  FetchingComplete: 'LIST_FETCHING_COMPLETE',
  FetchingError: 'LIST_FETCHING_ERROR'
};


export const fetching = () => ({ type: ActionTypes.Fetching });
export const fetchingComplete = (items) => ({ type: ActionTypes.FetchingComplete, items });
export const fetchingError = (err) => ({ type: ActionTypes.FetchingError, err });

const api = (options) => ({
  get: (a) => {
    console.log('API-GET', options, a);
    return 'hello';
  }
})

export const add = (formData) => {
  return (dispatch) => {
    request
      .post('http://localhost:8000/list')
      .set('Content-Type', 'application/json')
      .send({ text: formData.text})
      .end((err, res) => {
        if(err) {
          alert('ERROR HAPPENING');
        } else {
          dispatch({ type: ActionTypes.Add, item: formData.text });
        }
      });
  }
};

export const fetch = () => {
  return (dispatch) => {

    // api({name: 'jamie'}).get('123');

    dispatch(fetching());
    request
      .get('http://localhost:8000/list')
      .end(function(err, res){
        if(err) {
          dispatch(fetchingError(err));
        } else {
          dispatch(fetchingComplete(res.body.items));
        }
      });
  }
};


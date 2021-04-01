const handleOriginalRes = (response, res) => {
  if (response.ok) {
    const data = response.json();
    return data;
  }
  return response.json().then(err => {
    return Promise.reject({
      status: response.status,
      statusText: response.statusText,
      errorMessage: err,
    })
  })
};

module.exports = handleOriginalRes;
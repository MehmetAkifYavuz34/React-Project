function formatParams(params: { [key: string]: string }): string {
  let queryString = "?";

  Object.keys(params).forEach((key) => {
    const values = params[key].split(",");

    if (key === "price") {
      queryString += `${key}_lte=${values[0]}&`;
    } else if (key === "gender") {
      queryString += `${key}=${values[0]}&`;
    } else {
      values.forEach((value) => {
        queryString += `${key}_like=${value}&`;
      });
    }
  });

  // Son '&' karakterini kaldırmak için slice kullanıyoruz
  return queryString.slice(0, -1);
}

export default formatParams;

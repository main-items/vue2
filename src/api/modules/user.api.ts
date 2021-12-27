const urlName = "/user";
export default (Axios: any): any => {
  return {
    gitUser (count: number) {
      return Promise.resolve().then(() => {
        console.log(count)
        return count
      })
    }
  };
};

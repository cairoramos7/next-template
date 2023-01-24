const wait = async (time: number) =>
  new Promise((res) => setTimeout(res, time));

export default wait;

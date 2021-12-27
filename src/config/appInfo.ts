const getAppInfo = (ip: string, port: number | string) => {
  return [
    {
      me: 'apiServer',
      dev: `//${ip}:${port}`,
    }
  ]
}

module.exports = getAppInfo

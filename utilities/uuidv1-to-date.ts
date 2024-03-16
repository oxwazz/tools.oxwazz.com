// ref: https://github.com/xehrad/UUID_to_Date/blob/master/UUID_to_Date.js#L2

const GREGORIAN_OFFSET = 122192928000000000
export const UUIDv1ToDate = () => {
  return {
    get_time_int: function (uuidStr: string) {
      // (string) uuidStr format => '11111111-2222-#333-4444-555555555555'
      const uuidSrr = uuidStr.split('-')
      const timeStr = [
        uuidSrr[2].substring(1),
        uuidSrr[1],
        uuidSrr[0]
      ].join('')
      // timeStr is convert  '11111111-2222-#333-4444-555555555555'  to  '333222211111111'
      return parseInt(timeStr, 16)
    },
    get_date_obj: function (uuidStr: string) {
      // (string) uuidStr format => '11111111-2222-#333-4444-555555555555'
      const intTime = this.get_time_int(uuidStr) - GREGORIAN_OFFSET
      const intMillisec = Math.floor(intTime / 10000)
      return new Date(intMillisec)
    }
  }
}


export class Utility {
  static queryStrConvert(params: Record<string, any>) {
    if (Object.values(params).length === 0) return '';
    let str = '';
    Object.entries(params).map(([key, value]) => {
      if (key && value) str += str === '' ? `?${key}=${value}` : `&${key}=${value}`;
    }, '');
    return str;
  };
}
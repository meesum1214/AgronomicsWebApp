// Timestamp to ago converter
export function timeSince(timestamp: number) {
  var now = new Date(),
    secondsPast = (now.getTime() - new Date(timestamp).getTime()) / 1000;
  if (secondsPast < 60) {
    return parseInt(String(secondsPast)) + 's';
  }
  if (secondsPast < 3600) {
    return parseInt(String(secondsPast / 60)) + 'm';
  }
  if (secondsPast <= 86400) {
    return parseInt(String(secondsPast / 3600)) + 'h';
  }
  if (secondsPast > 86400) {
    var day = now.getDate() - new Date(timestamp).getDate();
    if (day == 1) {
      return 'Yesterday';
    } else if (day == 0) {
      return 'Today';
    } else {
      return parseInt(String(day)) + 'd';
    }
  }
}

export const daysLeft = (timestamp: number) => {
  var now = new Date()
  var secondsPast = (now.getTime() - new Date(timestamp).getTime()) / 1000
  if (secondsPast < 60) {
    return parseInt(String(secondsPast)) + 's'
  }
  if (secondsPast < 3600) {
    return parseInt(String(secondsPast / 60)) + 'm'
  }
  if (secondsPast <= 86400) {
    return parseInt(String(secondsPast / 3600)) + 'h'
  }
  if (secondsPast > 86400) {
    var day = now.getDate() - new Date(timestamp).getDate()
    if (day == 1) {
      return 'Yesterday'
    } else if (day == 0) {
      return 'Today'
    } else {
      return parseInt(String(day)) + 'd'
    }
  }
}

export const date_to_dayname = (date:string) => {
  const day = new Date(date).getDay();
  switch (day) {
    case 0:
      return 'Sun';
    case 1:
      return 'Mon';
    case 2:
      return 'Tue';
    case 3:
      return 'Wed';
    case 4:
      return 'Thu';
    case 5:
      return 'Fri';
    case 6: 
      return 'Sat';
      
  }
}

// timestamp to date converter
export const timestamp_to_date = (timestamp:number) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

// 2022-05-17T09:48:22.192Z to date converter
export const stringDate_to_date = (timestamp:string) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

export const daymonthtodate = (timestamp:string) => {
  const date = timestamp.split('-')
  const day = date[1]
  const month = date[0]
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${day} ${months[parseInt(month) - 1]}`
}

export const groupTimeByDate = (arr:[],key:string) => {
  return arr?.reduce((acc:any, obj:any) => {
    const date = obj[key].split('T')[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(obj);
    return acc;
  }, {});
}
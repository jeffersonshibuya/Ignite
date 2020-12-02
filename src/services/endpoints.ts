// Getting date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if(month < 10) {
    return `0${month}`
  } else {
    return month;
  }
}

const getCurrentDay = () => {
  const day = new Date().getDate();
  if(day < 10) {
    return `0${day}`
  } else {
    return day;
  }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

export const popularGamesUrl = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
export const upcomingGamesUrl = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
export const newGamesUrl = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const getGameDetailUrl = (id: number) => `games/${id}`;
export const getScreenShtosUrl = (id: number) => `games/${id}/screenshots`;
export const searchGameUrl = (game_name: string) => `games?search=${game_name}&page_size=9`;
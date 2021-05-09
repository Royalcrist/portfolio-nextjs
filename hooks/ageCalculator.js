export default function ageCalculator(bDay, bMonth, bYear) {
    let month = new Date().getMonth() - bMonth;
    let day = new Date().getDate();
    let year = new Date().getFullYear() - bYear;

    return month < 0 || bDay > day ? year - 1 : year;
}

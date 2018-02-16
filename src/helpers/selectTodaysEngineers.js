const todaysEngineers = (eligibleEngineersList, engineersState) => {

  let engineers = eligibleEngineersList.map(engineer => {
    return engineer.name
  });

  let engineersObj = {
    shiftYesterday: [],
    shiftToday: [],
    engineers: []
  }

  let shifts = {
    morning: null,
    afternoon: null
  }

  let selectFirstEngineer = engineers[Math.floor(Math.random() * engineers.length)];
  shifts.morning = selectFirstEngineer;

  if(shifts.morning) {
    const morningEng = engineers.indexOf(shifts.morning);
    if (morningEng !== -1) {
      engineers.splice(morningEng, 1)
    }
    let selectSecondEngineer = engineers[Math.floor(Math.random() * engineers.length)];
    shifts.afternoon = selectSecondEngineer;
  }

  engineersObj.engineers = engineersState.slice(0);

  if (shifts.morning !== '' && shifts.afternoon !== '') {
    Object.keys(engineersObj.engineers).forEach((key) => {
      if(engineersObj.engineers[key].name === shifts.morning) {
        engineersObj.engineers[key].shifts_worked += 1;
       }
      if (engineersObj.engineers[key].name === shifts.afternoon) {
        engineersObj.engineers[key].shifts_worked += 1;
      }
    });
  };

  // update who will work today
  engineersObj.shiftToday.push(shifts.morning);
  engineersObj.shiftToday.push(shifts.afternoon);

  return engineersObj;
}

export default todaysEngineers;

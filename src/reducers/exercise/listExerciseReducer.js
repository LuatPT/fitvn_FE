var init = [
            {
                exerciseId:1,
                exerciseName: "Bench Press",
                exerciseImg: "https://www.wheystore.vn/upload/news_optimize/wst_1606363189_bench_press_la_gi__huong_dan_cach_tap_bench_press_day_du_nhat_image_1606363190_7.jpg",
                exerciseSet: 3,
                exerciseRep: 10,
                exerciseType: "Chest",
                exerciseContent: "It's good for chest"
            },
             {
                exerciseId:2,
                exerciseName: "Lat Pulldown",
                exerciseImg: "https://www.thethaothientruong.vn/uploads/2019/bai-tap-lat-pulldown.jpg",
                exerciseSet: 3,
                exerciseRep: 12,
                exerciseType: "Back",
                exerciseContent: "It's good for lat and back"
            },
             {
                exerciseId:3,
                exerciseName: "Squat",
                exerciseImg: "https://www.thethaothientruong.vn/uploads/contents/bodyweight-squat.jpg",
                exerciseSet: 4,
                exerciseRep: 8,
                exerciseType: "Leg",
                exerciseContent: "It's good for leg"
            },
             {
                exerciseId:4,
                exerciseName: "Deadlift",
                exerciseImg: "https://weighttraining.guide/wp-content/uploads/2016/05/barbell-deadlift-resized.png",
                exerciseSet: 4,
                exerciseRep: 8,
                exerciseType: "Hip" ,
                exerciseContent: "It's good for hip"
            },
             {
                exerciseId:5,
                exerciseName: "Shoulder Press",
                exerciseImg: "https://weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Shoulder-Press-resized.png",
                exerciseSet: 2,
                exerciseRep: 8,
                exerciseType: "Shoulder",
                exerciseContent: "Good exercise for shoulder"
            }
        ];
const listExerciseReducer = (state = init, action) => {
  switch (action.type) {
    case 'GET_EXERCISE':
      if (action.listExercise === []) {
        return state;
      }else{
        return action.listExercise;
      }
    default:
      return state;
  }
};
export default listExerciseReducer;
var init = [
            {
                id:1,
                name: "Bench Press",
                image: "https://www.wheystore.vn/upload/news_optimize/wst_1606363189_bench_press_la_gi__huong_dan_cach_tap_bench_press_day_du_nhat_image_1606363190_7.jpg",
                set: 3,
                rep: 10,
                type: "Chest",
                content: "It's good for chest"
            },
             {
                id:2,
                name: "Lat Pulldown",
                image: "https://www.thethaothientruong.vn/uploads/2019/bai-tap-lat-pulldown.jpg",
                set: 3,
                rep: 12,
                type: "Back",
                content: "It's good for lat and back"
            },
             {
                id:3,
                name: "Squat",
                image: "https://www.thethaothientruong.vn/uploads/contents/bodyweight-squat.jpg",
                set: 4,
                rep: 8,
                type: "Leg",
                content: "It's good for leg"
            },
             {
                id:4,
                name: "Deadlift",
                image: "https://weighttraining.guide/wp-content/uploads/2016/05/barbell-deadlift-resized.png",
                set: 4,
                rep: 8,
                type: "Hip",
                content: "It's good for hip"
            },
             {
                id:5,
                name: "Shoulder Press",
                image: "https://weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Shoulder-Press-resized.png",
                set: 2,
                rep: 8,
                type: "Shoulder",
                content: "Good exercise for shoulder"
            }
        ];
const listExerciseReducer = (state = init, action) => {
  switch (action.type) {
    case 'GET_EXCERCISE':
      return action.productObj;
    default:
      return state;
  }
};
export default listExerciseReducer;
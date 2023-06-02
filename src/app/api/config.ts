const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDc0YTQ1OWMwNjcxYjM4ZDBmZmRkNDg4ZjkwMTAwNSIsInN1YiI6IjY0NzQ1ZjI3NWNkMTZlMDBiZjEyMTA2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.auNHPToePq71ofnI8Ps5QTWDIRMdogDpsR1JuQrVF18',
  apiKey: '6474a459c0671b38d0ffdd488f901005',

  originalImage: (imgPath: string) => {
    'https://image.tmdb.org/t/p/original/' + imgPath;
  },
  w500Img: (imgPath: string) => {
    'https://image.tmdb.org/t/p/w500/' + imgPath;
  },
};
export default apiConfig;

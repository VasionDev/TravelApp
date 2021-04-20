import Question from '../models/question';
import Category from './../models/category';

export const CATEGORY_LIST = [
    new Category('u1', 'দর্শনীয় স্থান', 'https://media-cdn.tripadvisor.com/media/photo-w/02/68/cf/49/filename-dscn0388-jpg.jpg'),
    new Category('u2', 'প্রকৃতি ও উদ্যান', 'https://media-cdn.tripadvisor.com/media/photo-o/05/3d/56/54/boga-lake.jpg'),
    new Category('u3', 'যাদুঘর সমূহ', 'https://media-cdn.tripadvisor.com/media/photo-o/11/29/3c/41/6-bangladesh-national.jpg'),
    new Category('u4', 'ঐতিহাসিক স্থান', 'https://media-cdn.tripadvisor.com/media/photo-s/0f/b2/0e/1d/national-memmorial-front.jpg'),
]

export const QUESTION_LIST = [
    new Question('omc1', ['u1', 'u4'], 'এই দর্শনীয় স্থানটি কোন জেলায় অবস্থিত?', 'https://media-cdn.tripadvisor.com/media/photo-m/1280/14/16/b2/fe/ahsan-monjil.jpg', 'Dhaka'),
    new Question('omc2', ['u1', 'u4'], 'এই দর্শনীয় স্থানটি কোন জেলায় অবস্থিত?', 'https://media-cdn.tripadvisor.com/media/photo-o/0c/e6/95/97/new-look-of-sonarga-after.jpg', 'Dhaka'),
    new Question('omc3', ['u1', 'u4'], 'এই দর্শনীয় স্থানটি কোন জেলায় অবস্থিত?', 'https://media-cdn.tripadvisor.com/media/photo-s/0d/4c/61/cd/lalbag-fort-dhaka-bangladesh.jpg', 'Dhaka'),
    new Question('omc4', ['u1', 'u4'], 'এই দর্শনীয় স্থানটি কোন জেলায় অবস্থিত?', 'https://media-cdn.tripadvisor.com/media/daodao/photo-o/12/ee/34/0e/20180420-152649-largejpg.jpg', 'Dhaka'),
    new Question('omc5', ['u1', 'u4'], 'এই দর্শনীয় স্থানটি কোন জেলায় অবস্থিত?', 'https://media-cdn.tripadvisor.com/media/photo-w/0d/ce/07/9a/shait-gumbad-mosque.jpg', 'Bagerhat'),
    new Question('omc6', ['u2'], 'এই দর্শনীয় স্থানটি কোন জেলায় অবস্থিত?', 'https://media-cdn.tripadvisor.com/media/photo-o/05/4a/15/7c/between-cox-s-inani-beach.jpg', "Cox's Bazar"),
    new Question('omc7', ['u2'], 'এই দর্শনীয় স্থানটি কোন জেলায় অবস্থিত?', 'https://media-cdn.tripadvisor.com/media/photo-o/08/ea/00/3f/boga-lake.jpg', "Bandarban"),
    new Question('omc8', ['u3'], 'এই দর্শনীয় স্থানটি কোন জেলায় অবস্থিত?', 'https://media-cdn.tripadvisor.com/media/photo-o/11/29/a5/f6/1-theatre.jpg', "Dhaka"),
    new Question('omc9', ['u3'], 'এই দর্শনীয় স্থানটি কোন জেলায় অবস্থিত?', 'https://media-cdn.tripadvisor.com/media/photo-o/11/29/3c/41/6-bangladesh-national.jpg', "Dhaka"),
    new Question('omc10', ['u3', 'u4'], 'এই দর্শনীয় স্থানটি কোন জেলায় অবস্থিত?', 'https://media-cdn.tripadvisor.com/media/photo-w/15/e3/2c/c0/front-section-of-the.jpg', "Dhaka")
]

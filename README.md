<p align="center"><img src="https://i.ibb.co/H7DNxfr/Screenshot-1.png" width="400"></p>

## About Clickbait

Test project for laravel+react job position. Clickbait is a project where users can vote for a better color and find out the best one for their own projects. There is 4000 random generated colors with 4000 random comments. Users can edit color description. As well as create new and delete old comments for colors. All colors page is using custom build pagination. Its my first time with laravel+react, so a few places are not using best possible practice.

## Requirements

Project was developed with:

- PHP 7.2.20
- NodeJS v14.17.0
- Laravel 7.29
- Bootsrap 4.0.0
- npm 6.14.13
- React v16.2.0
- XAMPP v3.2.4 (for MySQL database)

## Installation instructions

- Clone the repository with `git clone https://github.com/MatasR/clickbait.git`
- Change directory with `cd clickbait/`
- Create a database
- Duplicate .env.example to .env and update it with db connection credentials
- run `npm install`
- run `composer install`
- run `php artisan key:generate`
- run migrations with `php artisan migrate`
- run db seeders with `php artisan db:seed`
- run frontend with `npm run dev`
- run backend with `php artisan serve`
- open your browser `127.0.0.1:8000`

## Happy voting!

'use strict';

exports.seed = function(knex) {
  return knex('clubs').del()
    .then(() => knex('clubs').insert([
      {
        id: 1,
        name: 'Arsenal',
        team_id: 9002,
        logo: './images/clubs/Arsenal.png',
        banner: './images/banners/Arsenal.jpg',
        stadium: './images/stadiums/arsenal.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 2,
        name: 'Bournemouth',
        team_id: 9053,
        logo: './images/clubs/Bournemouth.png',
        banner: './images/banners/bournemouth.jpg',
        stadium: './images/stadiums/bournemouth.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 3,
        name: 'Burnley',
        team_id: 9072,
        logo: './images/clubs/Burnley.png',
        banner: './images/banners/burnley.jpg',
        stadium: './images/stadiums/burnley.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 4,
        name: 'Chelsea',
        team_id: 9092,
        logo: './images/clubs/Chelsea.png',
        banner: './images/banners/chelsea.jpg',
        stadium: './images/stadiums/chelsea.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 5,
        name: 'Crystal Palace',
        team_id: 9127,
        logo: './images/clubs/Crystal-Palace.png',
        banner: './images/banners/crystal-palace.jpg',
        stadium: './images/stadiums/crystal-palace.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 6,
        name: 'Everton',
        team_id: 9158,
        logo: './images/clubs/Everton.png',
        banner: './images/banners/everton.jpg',
        stadium: './images/stadiums/everton.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 7,
        name: 'Hull City',
        team_id: 9221,
        logo: './images/clubs/Hull-City.png',
        banner: './images/banners/hull-city.jpg',
        stadium: './images/stadiums/hull-city.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 8,
        name: 'Leicester',
        team_id: 9240,
        logo: './images/clubs/Leicester-City.png',
        banner: './images/banners/leicester.jpg',
        stadium: './images/stadiums/leicester.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 9,
        name: 'Liverpool',
        team_id: 9249,
        logo: './images/clubs/Liverpool.png',
        banner: './images/banners/liverpool.jpg',
        stadium: './images/stadiums/liverpool.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 10,
        name: 'Manchester City',
        team_id: 9259,
        logo: './images/clubs/Manchester-City.png',
        banner: './images/banners/manchester-city.jpg',
        stadium: './images/stadiums/man-city.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 11,
        name: 'Manchester United',
        team_id: 9260,
        logo: './images/clubs/Manchester-United.png',
        banner: './images/banners/manchester-united.jpg',
        stadium: './images/stadiums/man-u.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 12,
        name: 'Middlesbrough',
        team_id: 9274,
        logo: './images/clubs/Middlesbrough.png',
        banner: './images/banners/middlesbrough.jpg',
        stadium: './images/stadiums/middlesbrough.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 13,
        name: 'Southampton',
        team_id: 9363,
        logo: './images/clubs/Southampton.png',
        banner: './images/banners/southampton.jpg',
        stadium: './images/stadiums/southampton.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 14,
        name: 'Stoke City',
        team_id: 9378,
        logo: './images/clubs/Stoke-City.png',
        banner: './images/banners/stoke-city.jpg',
        stadium: './images/stadiums/stoke-city.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 15,
        name: 'Sunderland',
        team_id: 9384,
        logo: './images/clubs/Sunderland.png',
        banner: './images/banners/sunderland.jpg',
        stadium: './images/stadiums/sunderland.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 16,
        name: 'Swansea',
        team_id: 9387,
        logo: './images/clubs/Swansea-City.png',
        banner: './images/banners/swansea.jpg',
        stadium: './images/stadiums/swansea.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 17,
        name: 'Tottenham',
        team_id: 9406,
        logo: './images/clubs/Tottenham-Hotspur.png',
        banner: './images/banners/tottenham.jpg',
        stadium: './images/stadiums/tottenham.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 18,
        name: 'Watford',
        team_id: 9423,
        logo: './images/clubs/Watford.png',
        banner: './images/banners/watford.jpg',
        stadium: './images/stadiums/watford.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 19,
        name: 'West Brom',
        team_id: 9426,
        logo: './images/clubs/West-Brom.png',
        banner: './images/banners/west-bromwich.jpg',
        stadium: './images/stadiums/west-brom.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      },
      {
        id: 20,
        name: 'West Ham United',
        team_id: 9427,
        logo: './images/clubs/West-Ham.png',
        banner: './images/banners/west-ham.jpg',
        stadium: './images/stadiums/west-ham.jpg',
        created_at: new Date('2016-09-15 12:16:16 UTC'),
        updated_at: new Date('2016-09-15 12:16:16 UTC')
      }])
    )
    .then(() => knex.raw(
        "SELECT setval('clubs_id_seq', (SELECT MAX(id) FROM clubs));"
      )
    );
};

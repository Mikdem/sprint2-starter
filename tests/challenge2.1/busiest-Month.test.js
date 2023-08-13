/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.1';
import { Job } from '../../common/model';
import { Skill } from '../../common/model';

const j1 = new Job('job1',   new Date(2023, 1, 1));
const j2 = new Job('job2',   new Date(2023, 1, 1));
const j3 = new Job('job3',   new Date(2023, 4, 10));
const j4 = new Job('job4',   new Date(2023, 4, 13));
const j5 = new Job('job5',   new Date(2023, 4, 15));
const j6 = new Job('job6',   new Date(2023, 1, 1));
const j7 = new Job('job7',   new Date(2023, 1, 1));
const j8 = new Job('job8',   new Date(2023, 2, 1));
const j9 = new Job('job9',   new Date(2023, 4, 10));
const j10 = new Job('job10',   new Date(2023, 4, 13));
const j11 = new Job('job11',   new Date(2023, 4, 15));
const j12 = new Job('job12',   new Date(2023, 1, 1));

test('Busiest Month Test', () => {
  expect(
    Utils.busiestMonth([j1, j2, j3, j4, j5, j6, j7, j8]))
    .toEqual(
      0
    );
});

test('Busiest Month Test', () => {
  expect(Utils.busiestMonth([j1, j2, j3, j4, j5, j6, j7, j8, j9, j10, j11, j12]))
    .toEqual(3);
});


test('Busiest Month Test', () => {
  expect(Utils.busiestMonth([j1, j4, j6]))
    .toEqual(0);
});

test('Busiest Month Test', () => {
    expect(Utils.busiestMonth([j3, j4, j5]))
      .toEqual(3);
  });
  

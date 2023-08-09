/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.1.js';
import { Candidate } from '../../common/model.js';

const c1 = new Candidate('C1', new Date(2010, 1, 1), [], 'M');
const c2 = new Candidate('C2', new Date(2011, 1, 1), [], 'F');
const c3 = new Candidate('C3', new Date(2012, 1, 1), [], 'M');
const c4 = new Candidate('C4', new Date(2012, 1, 1), [], 'F');
const c5 = new Candidate('C4', new Date(2012, 1, 1));

test('gender Ratio test', () => {
  expect(
    Utils.genderRatio([c1, c2, c3]))
    .toEqual(
      0.5
    );

  expect(
    Utils.genderRatio([c1, c2, c3]))
    .toEqual(
      0.5
    );
});

test('gender Ratio test', () => {
  expect(
    Utils.genderRatio([c1, c2, c3, c4]))
    .toEqual(
      1
    );

  expect(
    Utils.genderRatio([c1, c2, c3, c4 ]))
    .toEqual(
      1
    );
});

test('gender Ratio test', () => {
  expect(
    Utils.genderRatio([c1, c2, c3, c4, c5]))
    .toEqual(
      1.5
    );

  expect(
    Utils.genderRatio([c1, c2, c3, c4, c5]))
    .toEqual(
      1.5
    );
});

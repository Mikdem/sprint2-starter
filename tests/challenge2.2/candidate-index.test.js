/* eslint-disable no-undef */
import * as Utils from '../../challenges/challenge.2.2';
import { Candidate } from '../../common/model';

const c1 = new Candidate('Berhane', new Date(2010, 1, 1));
const c2 = new Candidate('Birhane', new Date(2010, 1, 5));
const c3 = new Candidate('Alemayehu', new Date(2010, 4, 5));
const c4 = new Candidate('Abrham', new Date(2010, 5, 6));
const c5 = new Candidate('Hailu', new Date(2010, 10, 7));
const c6 = new Candidate('T/Mariam', new Date(2010, 13, 5));
const c7 = new Candidate('T/Mariam', new Date(2010, 4, 9));
const c8 = new Candidate('Ashenafi', new Date(2010, 1, 5));
const c9 = new Candidate('Ashenefi', new Date(2010, 1, 5));

test('Candidate Index test', () => {
  expect(
    Utils.candidateIndex([c1, c2])).toEqual({"BRHN": [c1, c2]});
});

test('Candidate Index test', () => {
  expect(Utils.candidateIndex([c8, c9])).toEqual({"ASHNF": [c8, c9]});
});

test('Candidate Index test', () => {
    expect(Utils.candidateIndex([c6, c7])).toEqual({"TMRM": [c6, c7]});
});

test('Candidate Index test', () => {
    expect(Utils.candidateIndex([c5])).toEqual({"HL": [c5]});
});


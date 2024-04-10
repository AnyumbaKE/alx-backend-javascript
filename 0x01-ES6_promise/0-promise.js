#!/usr/bin/env node

export default function getResponseFromAPI () {
  return new Promise((resolve, reject) => {
    resolve('Hi Mom');
    // Rejecting with an Error object
    reject(new Error('Rejected'));
  });
}

// const assert = require('assert');
// const { exec } = require('child_process');

// describe('Integration Test', () => {
//     it('should run the main script without errors', (done) => {
//         exec('node src/index.js', (error, stdout, stderr) => {
//             assert.strictEqual(error, null);
//             assert.strictEqual(stderr, '');
//             assert(stdout.includes('Winner: Player'));
//             done();
//         });
//     });
// });
import { exec } from 'child_process';
import { strict as assert } from 'assert';

describe('Integration Test', () => {
    it('should run the main script without errors', (done) => {
        exec('node dist/index.js', (error, stdout, stderr) => { // Ensure you are pointing to the compiled TypeScript output
            assert.strictEqual(error, null);
            assert.strictEqual(stderr, '');
            assert(stdout.includes('Winner: Player'));
            done();
        });
    });
});

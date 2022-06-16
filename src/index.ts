import debugtab from './types/debugtab';

const quecosa = new debugtab()


const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function main() {
    while (true) {
        quecosa.log('hola')
        console.log('hola')
    }
}
main()
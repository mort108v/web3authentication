// const MoralisSets = async () => {

/* import moralis */
const Moralis = require("moralis/node");

/* Moralis init code */
const serverUrl = "https://kzefbwpyy9ys.usemoralis.com:2053/server";
const appId = "1GwxxHwA56Mg9aix1In6oC94c8WuBx3dXRUfio2M";
const masterKey = "E28w9iBs4Osr0sNIDAC9uD6rGTZdI03wBzM9VxUm";

await Moralis.start({ serverUrl, appId, masterKey });   
// }

// export default MoralisSets
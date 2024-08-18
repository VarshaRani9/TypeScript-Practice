// * 1 Problem : values can be channged
interface Configg {
    endpoint: string;
    apiKey: string;
}
const conf:Configg = {
    endpoint: "http://localhost/3000",
    apiKey: ""
}
conf.endpoint = "http://localhost/8787" // allowed because conf is here reference variable and making it const causes its address as constant.

// * 2 readonly
interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
  }
  const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };
  // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.
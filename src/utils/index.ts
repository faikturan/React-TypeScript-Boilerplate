// Check if the app is being run from a specified environment, or just return the running environment (dev, prod, test)
type Env = typeof process.env.NODE_ENV;

export function checkEnv(): string;
export function checkEnv(type: Env): boolean;
export function checkEnv(type?: Env | undefined) {
  const environment = process.env.NODE_ENV;
  if (type === undefined) return environment as string;
  return process.env.NODE_ENV === type;
}

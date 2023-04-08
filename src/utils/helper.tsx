export function getAsset(asset: string) {
  return require(`../assets/${asset}`);
}

export const errorParser = (errors: any, touched: any, key: any) => {
  return errors[key] && touched[key] && errors[key];
};

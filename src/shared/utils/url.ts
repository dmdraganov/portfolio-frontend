// src/shared/utils/url.ts

export const joinPaths = (...parts: string[]) => {
  const realParts = parts.filter(Boolean);
  const result = realParts.reduce((acc, part) => {
    const trimmedAcc = acc.endsWith('/') ? acc.slice(0, -1) : acc;
    const trimmedPart = part.startsWith('/') ? part.slice(1) : part;
    return `${trimmedAcc}/${trimmedPart}`;
  });
  return result;
};

export const getWorkUrl = (
  worksRoot: string,
  basePath: string,
  relativePath: string
) => {
  return joinPaths(worksRoot, basePath, relativePath);
};

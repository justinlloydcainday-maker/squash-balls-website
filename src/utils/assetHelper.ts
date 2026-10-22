/**
 * Utility to resolve asset paths for GitHub Pages and any subpath hosting.
 * Handles both relative and absolute paths, ensuring that images and files
 * in the public/ folder are loaded correctly regardless of whether the site is
 * hosted at the domain root (https://example.com/) or a repository subpath
 * (https://<username>.github.io/<repository>/).
 */
export function getAssetUrl(path: string | undefined | null): string {
  if (!path) return '';

  // Return as-is if already an external or data URL
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // import.meta.env.BASE_URL is provided by Vite (defaults to './' or repo base)
  const base = import.meta.env.BASE_URL || './';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  return `${normalizedBase}${cleanPath}`;
}

import {miscUtils}                  from '@yarnpkg/core';
import {PortablePath, npath, ppath} from '@yarnpkg/fslib';
export function getPath(p: string) {
  return ppath.relative(PortablePath.root, ppath.resolve(PortablePath.root, npath.toPortablePath(p)));
}

  parts: Array<PatchMutationPart>,
        currentFilePatch.newFileMode = line.slice(`new file mode `.length).trim();
          if (!line.startsWith(`\\ No newline at end of file`))
          fromPath: getPath(renameFrom),
          toPath: getPath(renameTo),
          throw new Error(`Bad parse state: no path given for file deletion`);
          path: getPath(path),
          path: getPath(path),
        path: getPath(destinationFilePath),
        path: getPath(destinationFilePath),
      case `deletion`: {
      case `insertion`: {
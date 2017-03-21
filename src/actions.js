import fileSaver from 'file-saver';

export const openCloseSidebar = (tree, isOpening) => {
  tree.set(['isSidebarOpening'], isOpening);
}

export const redraw = (tree) => {
  tree.emit('redraw');
}

export const triggerSaveAsImage = (tree) => {
  tree.emit('saveAsImage');
}

export const saveAsImage = (tree, blob, filename) => {
  fileSaver.saveAs(blob, filename);
}

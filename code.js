async function replaceText() {
  if (figma.currentPage.selection.length !==1 ) {
    figma.closePlugin("Select one line of text")
      return
  }

  await figma.loadFontAsync(figma.currentPage.selection[0].fontName)

  const newNames =  ["Rosa Antón",  "Abeba Crystal", "Nada Ambre", "Karolina Nahia", "Leo Mack"]

  const randomName = newNames[Math.floor(Math.random() * newNames.length)];

  figma.currentPage.selection[0].characters = randomName
  figma.currentPage.selection[0].name = randomName


  figma.closePlugin("Name replaced!")

}

replaceText()





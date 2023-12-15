function removeHrefFromContent(content) {
  // Create a temporary div element
  const tempDiv = document.createElement("div");

  // Set its innerHTML to your content
  tempDiv.innerHTML = content;

  // Find all anchor tags within the div
  const anchorTags = tempDiv.querySelectorAll("a");

  // Remove the href attribute from each anchor tag
  anchorTags.forEach((aTag) => {
    aTag.removeAttribute("href");
  });

  // Get the modified HTML content
  const modifiedContent = tempDiv.innerHTML;

  return <p dangerouslySetInnerHTML={{ __html: modifiedContent }} />;
}

export default removeHrefFromContent;

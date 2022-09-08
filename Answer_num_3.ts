const printAttributes = (HTMLTag : string) =>{
    const arrAttributes:Array<string> = HTMLTag.split(" ");
    //splice tag from the HTMLTag
    arrAttributes.splice(0,1);
    return(
    `
    <li>
        ${arrAttributes.map(attribute =>{
            attribute =attribute.replace(/[~%&\\"]/g, "");
            attribute = attribute.replace(/[~%&\\=]/g, ":")
            return (`<ul>${
                attribute
            }</ul>`)
        })}
    </li>
    `
    )
}

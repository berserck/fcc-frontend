// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a
// string to their corresponding HTML entities.

function convertHTML(str) {
  var toReplace = {'&':'&amp;','<':'&lt;','>':"&gt;",'"':"&quot;","'":"&apos;"};
  Object.keys(toReplace).forEach( function(key){
    str = str.replace(new RegExp(key, 'g'),toReplace[key]);
  });
  return str;
}

//console.log(convertHTML("Hamburgers < Pizza < Tacos"));

exports.convertHTML = convertHTML;
// Tests:
// convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
// convertHTML("Shindler's List") should return Shindler&​apos;s List.
// convertHTML("<>") should return &​lt;&​gt;.
// convertHTML("abc") should return abc.

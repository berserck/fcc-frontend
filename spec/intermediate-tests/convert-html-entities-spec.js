describe( "Tests for ../../intermediate/convert-html-entities.js", function(){
	var convertHTML = require ('../../intermediate/convert-html-entities').convertHTML;
	it ('convertHTML(\'Dolce & Gabbana\') should return \'Dolce &amp; Gabbana\'.', function() {
		expect(convertHTML('Dolce & Gabbana')).toBe('Dolce &amp; Gabbana');
	});
	it ('convertHTML(\'Hamburgers < Pizza < Tacos\') should return \'Hamburgers &lt; Pizza &lt; Tacos\'.', function() {
		expect(convertHTML('Hamburgers < Pizza < Tacos')).toBe('Hamburgers &lt; Pizza &lt; Tacos');
	});
	it ('convertHTML(\'Sixty > twelve\') should return \'Sixty &gt; twelve\'.', function() {
		expect(convertHTML('Sixty > twelve')).toBe('Sixty &gt; twelve');
	});
	it ('convertHTML(\'Stuff in \"quotation marks\"\') should return \'Stuff in &quot;quotation marks&quot;\'.', function() {
		expect(convertHTML('Stuff in "quotation marks"')).toBe('Stuff in &quot;quotation marks&quot;');
	});
	it ('convertHTML(\"Shindler\'s List\") should return \'Shindler&apos;s List\'.', function() {
		expect(convertHTML("Shindler's List")).toBe('Shindler&apos;s List');
	});
	it ('convertHTML(\'<>\') should return \'&lt;&gt;\'.', function() {
		expect(convertHTML('<>')).toBe('&lt;&gt;');
	});
	it ('convertHTML(\'abc\') should return \'abc\'.', function() {
		expect(convertHTML('abc')).toBe('abc');
	});
});

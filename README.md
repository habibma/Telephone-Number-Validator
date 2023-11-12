# Telephone-Number-Validator
Return <code>true</code> if the passed string looks like a valid US phone number. Let's learn a little RegEx (Regular Expression) in depth at the same time!

<h2>Problem Description</h2>
<p>The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):</p>
<code>555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
</code>
<br>
<p>For this challenge you will be presented with a string such as <code>800-692-7753</code> or <code>8oo-six427676;laskdjf</code>. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return <code>true</code> if the string is a valid US phone number; otherwise, return <code>false</code>.</p>

<h2>Solution</h2>
<p>I used RegEx as it also seems the Question has been designed for practicing on this subject. The answer has been already uploaded as a TXT format but here I explain how the RegEx code in it works _ by parsing it into shorter parts</p>
<p>The entire expression is <code>/^(1 ?)?( ?\([0-9]{3}\) ?|[0-9]{3})([0-9]{3}|-[0-9]{3}-| [0-9]{3} |[0-9]{3}-)[0-9]{4}$/</code>. But what does that mean?</p>
<ul>
  <li>According to the question the number can begin only with a three-digit number or number 1 if a user intends to enter a country code (in this case only 1 is a valid prefix). For this purpose, this portion of the code has been presented: <code>^(1 ?)?</code> which means the whole entered number can begin with the number 1. The Question mark after each character indicates that the space after 1 and the whole part are optional.</li>
  <li> For the second step we should determine the number has to include a three-digit number as an area code. Therefore, the second part is <code>( ?\([0-9]{3}\) ?|[0-9]{3})</code>. According to the variants given to us the format of this part should be either with or without parentheses. The character <code>|</code> breaks this code into these two allowable forms. One form is a 3-digit number with parentheses as well as with spaces before and after (which are optional) and one form is a plain 3-digit number</li>
  <li>In the third part there is again a 3-digit number but this time it can come with or without <code>-</code> or just with spaces before and after. This code shows this intent: <code>([0-9]{3}|-[0-9]{3}\-| [0-9]{3} |[0-9]{3}-)</code>. Note: for this funky format of numbering "1(555)555-5555" we added the last possible option which means the same<code>[0-9]{3}-</code></li>
  <li>The last portion is a 4-digit number that comes only at the end. For this, we would easily add <code>[0-9]{4}$</code></li>
</ul>

<p>Everything is almost done. For the rest of our task, we will write a function that takes a stringified number to test if it matches our prepared pattern. Our function returns false unless it meets our one and only condition.</p>

# Disc Golf Doubles TeamMaker

### This doubles team maker was created for YouTuber TQM_gg as they planned a small private tournament, the **FLOEVERBUI OPEN**. This website takes advantage of your local storage. Use it on your phone and if you usually play with the same group of people you will be set with minimal need to update every time. If you love disc golf, don't forget to follow Peachy Disc Golf on Youtube to see what shenanigans they get up too. :tv: https://www.youtube.com/channel/UCa8x1nQJ3vhDjrRYaeiuzow

**Link to project:** https://floeverbui.netlify.app/

![randomizer button and name of returned disc](https://github.com/lfrendahl/DiscGolfTeamMaker/blob/main/teammakerCover.jpg)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

This website was created with the user in mind.
On load the input box is already selected. This is planned so that as that list repopulates the user can quickly type the following name without additional steps. User friendliness was also taken into consideration by allowing names to submit not only on a button click, but also on pressing the enter key. Finally, the use of local storage was also used to support the user. As disc golf friends tend to flock together, the use of local storage allows the previous list to be generated and then modified. Of course, a clear all button is easily accesible to the user in case they are a social butterfly. Individual names can also be removed from the list to allow easy shortening of the list or updating in case of spelling error.

The actual team creation starts with an array of names and then uses the math random functionality to select an index from the list and remove it before randomizing again for the next pick from a smaller list. 

## Optimization Plan
One of the errors that I had to work through was if users wanted to enter a name with a space in it. At the time I was storing data in local storage as a string with spaces. I adjusted the storage plan by separating name with the '*' character, but best practices would be collecting the data in a JSON format and then storing and accessing it using the JSON.stringify and JSON.parse methods. The current data storage method has vulnerability if users are tryign to input a name that is  * ~ fancy ~ *.

Another future plan to exapand this would be to allow users to select the size of team they want created.

Also, currently if teams are uneven, the final team list will have a player labeled "undefined". Adding a user prompt that warns the teams will not be even and asks the user if they want to proceed would be another user friendly feature.

## Lessons Learned:

This was my first website build using local storage and I enjoyed learning the different functionality that is availalbe. Local storage also offers a quick way to allow users to interact individually with a website without requiring them to create an account.  

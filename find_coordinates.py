import requests

# program to get the locations from my resumeBuilderSave files and
# transform them to coordinates through the google geocoding api
# it then writes the coordinates into the resumeBuilder file.

# PROBLEM!!! how to write lists into a file, because now they are basically in the string format.


#api key for geocoding
#api_key = "" in other file

# working of the code initialize array of lines
lines = []
# open file
with open('js/resumeBuilderSave2.js') as infile:
    # countries = -1

    # open file and look through it line by line
    for line in infile:
        # if line.find("country") > -1:
        #     countries +=1
        #    print countries

        # set sentence to be replaced,
        replaceable = "insert_coordinates_values"
        if line.find("location") > -1:
            # find locations and find their coordinates,
            location = line[line.find("location")+len("location : ")+2:-3]
            print location
            api_response = requests.get('https://maps.googleapis.com/maps/api/geocode/json?address={0}&key={1}'.format(location, api_key))
            api_response_dict = api_response.json()
        # if location is ok set it as the new coordinates
            if api_response_dict['status'] == 'OK':
                latitude = api_response_dict['results'][0]['geometry']['location']['lat']
                longitude = api_response_dict['results'][0]['geometry']['location']['lng']
                target = [latitude, longitude, location]
        #replace the text to be replaced with the coordinates
        if replaceable in line:
            line = line.replace(replaceable, repr(target))
            print line

        # (repeat both for experience-locations as well as places i've been to)
        replaceable_city = "insert_city_coordinates_values"
        if line.find("city_name") > -1:
            if replaceable_city in line:
                city_name = line[line.find("city_name")+len("city_name : ")+2:-len(', "coordinates" : "insert_city_coordinates_values"}')-3]
                print city_name
                api_response = requests.get('https://maps.googleapis.com/maps/api/geocode/json?address={0}&key={1}'.format(city_name, api_key))
                api_response_dict = api_response.json()
                if api_response_dict['status'] == 'OK':
                   latitude = api_response_dict['results'][0]['geometry']['location']['lat']
                   longitude = api_response_dict['results'][0]['geometry']['location']['lng']
                   target_city = [latitude, longitude, city_name]
                line = line.replace(replaceable_city, repr(target_city)) # how to write a list into a file?
                print line
        # add the line to the array of lines
        lines.append(line)
# write the lines one by one into the  target file
with open('js/resumeBuilder.js', 'w') as outfile:
    for line in lines:
        outfile.write(line)

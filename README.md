# Tree View App using React 

   Upload .json file to view the hierarchial tree structure

# Backend

   Used Node and Mongoose to store Tree data in MongoDB at the backend  


# Sample JSON file structure 

[
    {
        "name": "nodeName1",
        "parentName": null,
        "childrenNames": ["nodeName2", "nodeName3","nodeName5"]
      },
    {
        "name": "nodeName2",
        "parentName": "nodeName1",
        "childrenNames": ["nodeName4"]
      },
    { 
        "name": "nodeName3",
        "parentName": "nodeName1",
        "childrenNames": []
      },
    {
        "name": "nodeName4",
        "parentName": "nodeName2",
        "childrenNames": []
      },
    {
        "name": "nodeName5",
        "parentName": "nodeName1",
        "children": []
      }

]
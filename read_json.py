import json

with open("student.json") as f:
    data = json.load(f)

for s in data["students"]:
    print(f"{s['name']} is enrolled in{s["course"]}")
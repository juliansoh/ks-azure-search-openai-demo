# Define the path to the folder
$folderPath = "C:\git-local\kinder-systems-azure-search-openai-demo\data"

# Get all .json files in the folder
$jsonFiles = Get-ChildItem -Path $folderPath -Filter *.json

# Loop through each .json file and rename it with a .txt extension
foreach ($file in $jsonFiles) {
    $newFileName = [System.IO.Path]::ChangeExtension($file.FullName, ".txt")
    Rename-Item -Path $file.FullName -NewName $newFileName
}

Write-Host "All .json files have been renamed to .txt."

hvac
hot water
stove


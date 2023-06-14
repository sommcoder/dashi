#!/usr/bin/env pwsh

# 1) cd to the directory that contains this file and is where you want to add the new folder/js file
# 3) enter command: PowerShell -File addReactComponent.ps1

$ComponentName = Read-Host -prompt "Enter React Component Name"
$ComponentHTML = Read-Host -prompt "what HTML element will it return?"
$PSDefaultParameterValues = @{ '*:Encoding' = 'utf8' } # >> defaults to UTF-16 so we need to change this
if ($ComponentName.length -eq 0) {
Write-Output "You must specify a component name. Pascal Case is recommended for React components."
} 
else 
{
    New-Item -Path ./$ComponentName -itemType directory;
    # .css:
    New-Item -Path ./$ComponentName/$ComponentName.css;
    # .jsx:
    New-Item -Path ./$ComponentName/$ComponentName.jsx;
    Write-Output "import './$ComponentName.css';" >> ./$ComponentName/$ComponentName.jsx
    Write-Output "" >> ./$ComponentName/$ComponentName.jsx
    Write-Output "export default function $ComponentName() {" >> ./$ComponentName/$ComponentName.jsx
    Write-Output "    return (" >> ./$ComponentName/$ComponentName.jsx
    Write-Output "        <$ComponentHTML>" >> ./$ComponentName/$ComponentName.jsx
    Write-Output "        </$ComponentHTML>" >> ./$ComponentName/$ComponentName.jsx
    Write-Output "    );" >> ./$ComponentName/$ComponentName.jsx
    Write-Output "}" >> ./$ComponentName/$ComponentName.jsx
    Write-Host "Component $ComponentName created successfully!"
}

exit
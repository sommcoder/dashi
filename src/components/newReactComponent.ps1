# cd to the directory that contains this file and is where you want to add the new folder/js file
# command: PowerShell -File newReactComponent.ps1
# asks user for the name of the component
# asks user for the HTML element to be used as the styled-component

# assign a variable to a sequence/user prompt?
$ComponentName = Read-Host -prompt "Enter React Component Name"
$ComponentType = Read-Host -prompt "what HTML element will it return?"

$PSDefaultParameterValues = @{ '*:Encoding' = 'utf8' } # this: >> defaults to UTF-16 so we need to change this

# the expression -z string is TRUE IF the lenght of string is zero
if ($ComponentName.length -eq 0) {
Write-Output "You must specify a component name. Pascal Case is recommended for React components."
} 
else 
{
# Create component directory.
    New-Item -Path ./$ComponentName -itemType directory;

    # Create component file:
    New-Item -Path ./$ComponentName/$ComponentName.tsx;


    # in PowerShell if you use double-quotes you can reference the variable directly in the string!
    # Write component tSX file.
    Write-Output "import styled from 'styled-components';" >> ./$ComponentName/$ComponentName.tsx
    Write-Output "import {} from 'styled-components/cssprop';" >> ./$ComponentName/$ComponentName.tsx

    Write-Output "" >> ./$ComponentName/$ComponentName.tsx
    Write-Output "export default function $ComponentName() {" >> ./$ComponentName/$ComponentName.tsx
    Write-Output "    return (" >> ./$ComponentName/$ComponentName.tsx
    Write-Output "        <Styled$ComponentName>" >> ./$ComponentName/$ComponentName.tsx
    Write-Output "        </Styled$ComponentName>" >> ./$ComponentName/$ComponentName.tsx
    Write-Output "    );" >> ./$ComponentName/$ComponentName.tsx
    Write-Output "}" >> ./$ComponentName/$ComponentName.tsx
    Write-Output "const Styled$ComponentName = styled.$ComponentType;" >> ./$ComponentName/$ComponentName.tsx
}

exit
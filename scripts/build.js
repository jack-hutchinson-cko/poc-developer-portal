#!/usr/bin/env node
'use strict';

require('shelljs/global');
set('-e');

exec('dotnet build ./OpenApiGenerator/OpenApiGenerator.csproj');
exec('dotnet run -p ./OpenApiGenerator/OpenApiGenerator.csproj');

rm('-rf', 'output')

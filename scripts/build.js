#!/usr/bin/env node
'use strict';

require('shelljs/global');
set('-e');

exec('dotnet build ./openApiGenerator/OpenApiGenerator.csproj');
exec('dotnet run -p ./openApiGenerator/OpenApiGenerator.csproj');

rm('-rf', 'output');

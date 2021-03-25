#!/usr/bin/env node
'use strict';

require('shelljs/global');
set('-e');

exec('dotnet build ./openApiGenerator/openApiGenerator.csproj');
exec('dotnet run -p ./openApiGenerator/openApiGenerator.csproj');

rm('-rf', 'output');

// Copyright 2021 Woodpecker Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package main

import (
	"github.com/urfave/cli/v3"

	"go.woodpecker-ci.org/woodpecker/v3/cli/admin"
	"go.woodpecker-ci.org/woodpecker/v3/cli/common"
	"go.woodpecker-ci.org/woodpecker/v3/cli/exec"
	"go.woodpecker-ci.org/woodpecker/v3/cli/info"
	"go.woodpecker-ci.org/woodpecker/v3/cli/lint"
	"go.woodpecker-ci.org/woodpecker/v3/cli/org"
	"go.woodpecker-ci.org/woodpecker/v3/cli/pipeline"
	"go.woodpecker-ci.org/woodpecker/v3/cli/repo"
	"go.woodpecker-ci.org/woodpecker/v3/cli/setup"
	"go.woodpecker-ci.org/woodpecker/v3/cli/update"
	"go.woodpecker-ci.org/woodpecker/v3/version"
)

//go:generate go run docs.go app.go
func newApp() *cli.Command {
	app := &cli.Command{}
	app.Name = "woodpecker-cli"
	app.Description = "Woodpecker command line utility"
	app.Version = version.String()
	app.Usage = "command line utility"
	app.Flags = common.GlobalFlags
	app.Before = common.Before
	app.After = common.After
	app.Suggest = true
	app.Commands = []*cli.Command{
		admin.Command,
		exec.Command,
		info.Command,
		lint.Command,
		org.Command,
		pipeline.Command,
		repo.Command,
		setup.Command,
		update.Command,
	}

	return app
}

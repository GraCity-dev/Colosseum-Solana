use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod gracity_impact {
    use super::*;

    pub fn register_project(ctx: Context<RegisterProject>, name: String) -> Result<()> {
        msg!("Registering project: {}", name);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct RegisterProject<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
}
